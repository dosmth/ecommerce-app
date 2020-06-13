from app import db, ma
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.ext.declarative import declarative_base


# список категорий
class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(100))
    title = db.Column(db.String(100))
    # product = relationship("Product", backref="category")

    def __repr__(self):
        return f"Query('{self.id}', '{self.title}')"

    def all_children(self):
        return Product.query.filter((Product.category_id == self.id)).all()


class CategorySchema(ma.ModelSchema):
    class Meta:
        model = Category


category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)


# список пользователей
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    img = db.Column(db.String(100))
    phone = db.Column(db.String(100))
    addr = db.Column(db.String(100))

    def __repr__(self):
        return f"Query('{self.id}', '{self.phone}')"

    def all_children(self):
        return Product.query.filter((Product.user_id == self.id)).all()


class UserSchema(ma.ModelSchema):
    class Meta:
        model = User


user_schema = UserSchema()
users_schema = UserSchema(many=True)


# товары, которые продаем
class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    img = db.Column(db.String(100))
    price = db.Column(db.Integer)
    descr = db.Column(db.String(100))

    category_id = db.Column(Integer, ForeignKey('category.id'))
    category = relationship("Category", backref="products")
    user_id = db.Column(Integer, ForeignKey('user.id'))
    user = relationship("User", backref="user")

    def __repr__(self):
        return f"Product('{self.id}', '{self.title}')"


class ProductSchema(ma.ModelSchema):
    class Meta:
        model = Product


product_schema = ProductSchema()
products_schema = ProductSchema(many=True)
