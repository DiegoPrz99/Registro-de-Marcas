from sqlalchemy import Column, Integer, String, DateTime, func
from .database import Base

class Marca(Base):
    __tablename__ = "marcas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(200), nullable=False, index=True)
    titular = Column(String(200), nullable=False)
    estado = Column(String(50), nullable=False, default="Activo")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
