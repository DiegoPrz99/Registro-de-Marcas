from sqlalchemy.orm import Session
from . import models, schemas

def get_marcas(db: Session):
    return db.query(models.Marca).order_by(models.Marca.id.desc()).all()

def get_marca(db: Session, marca_id: int):
    return db.query(models.Marca).filter(models.Marca.id == marca_id).first()

def create_marca(db: Session, data: schemas.MarcaCreate):
    obj = models.Marca(**data.model_dump())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj

def update_marca(db: Session, marca_id: int, data: schemas.MarcaUpdate):
    obj = get_marca(db, marca_id)
    if not obj:
        return None
    for k, v in data.model_dump().items():
        setattr(obj, k, v)
    db.commit()
    db.refresh(obj)
    return obj

def delete_marca(db: Session, marca_id: int):
    obj = get_marca(db, marca_id)
    if not obj:
        return False
    db.delete(obj)
    db.commit()
    return True
