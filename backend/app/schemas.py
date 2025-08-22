from pydantic import BaseModel, Field

class MarcaBase(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=200)
    titular: str = Field(..., min_length=2, max_length=200)
    estado: str = Field(default="Activo")

class MarcaCreate(MarcaBase):
    pass

class MarcaUpdate(MarcaBase):
    pass

class MarcaOut(MarcaBase):
    id: int

    class Config:
        from_attributes = True
