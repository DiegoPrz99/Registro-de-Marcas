from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session

from ..database import get_db
from .. import crud, schemas

router = APIRouter(prefix="/api/v1/marcas", tags=["marcas"])

@router.get("", response_model=List[schemas.MarcaOut])
def list_marcas(db: Session = Depends(get_db)):
    return crud.get_marcas(db)

@router.get("/{marca_id}", response_model=schemas.MarcaOut)
def get_one(marca_id: int, db: Session = Depends(get_db)):
    marca = crud.get_marca(db, marca_id)
    if not marca:
        raise HTTPException(status_code=404, detail="Marca no encontrada")
    return marca

@router.post("", response_model=schemas.MarcaOut, status_code=201)
def create(data: schemas.MarcaCreate, db: Session = Depends(get_db)):
    return crud.create_marca(db, data)

@router.put("/{marca_id}", response_model=schemas.MarcaOut)
def update(marca_id: int, data: schemas.MarcaUpdate, db: Session = Depends(get_db)):
    updated = crud.update_marca(db, marca_id, data)
    if not updated:
        raise HTTPException(status_code=404, detail="Marca no encontrada")
    return updated

@router.delete("/{marca_id}", status_code=204)
def delete(marca_id: int, db: Session = Depends(get_db)):
    ok = crud.delete_marca(db, marca_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Marca no encontrada")
    return
