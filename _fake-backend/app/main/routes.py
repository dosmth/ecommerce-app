from flask import request
from flask import Blueprint
from flask_restful import Api, Resource
from app.main.models import *

main = Blueprint('main', __name__)
api_main = Blueprint('api_main', __name__)
api = Api(api_main)


@main.route("/")
def home():
    return "<h1>Fake Backend Actually</h1>"


# categories api
class CategoryListResource(Resource):
    def get(self):
        categories = Category.query.all()
        return categories_schema.dump(categories)

    def post(self):
        new_category = Category(
            url=request.json['url'],
            title=request.json['title']
        )
        db.session.add(new_category)
        db.session.commit()
        return category_schema.dump(new_category)


api.add_resource(CategoryListResource, '/category/')


class CategoryResource(Resource):
    def get(self, id):
        category = Category.query.get_or_404(id)
        return category_schema.dump(category)

    def patch(self, id):
        category = Category.query.get_or_404(id)
        if 'url' in request.json:
            category.url = request.json['url']
        if 'title' in request.json:
            category.title = request.json['title']
        db.session.commit()
        return category_schema.dump(category)

    def delete(self, id):
        category = Category.query.get_or_404(id)
        db.session.delete(category)
        db.session.commit()
        return '', 204


api.add_resource(CategoryResource, '/category/<int:id>')


class CategoryByUrlResource(Resource):
    def get(self):
        url = request.args['url']
        category = Category.query.filter(Category.url == url).one()
        return category_schema.dump(category)


api.add_resource(CategoryByUrlResource, '/category-by-url')


class CategoryUrlByIdResource(Resource):
    def get(self):
        id = request.args['id']
        category = Category.query.get_or_404(id)
        return {"url": category.url}


api.add_resource(CategoryUrlByIdResource, '/category-url-by-id')


# users api
class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return users_schema.dump(users)

    def post(self):
        new_user = User(
            name=request.json['name'],
            phone=request.json['phone'],
            addr=request.json['addr']
        )
        db.session.add(new_user)
        db.session.commit()
        return user_schema.dump(new_user)


api.add_resource(UserListResource, '/user/')


class UserResource(Resource):
    def get(self, id):
        user = User.query.get_or_404(id)
        return user_schema.dump(user)

    def patch(self, id):
        user = User.query.get_or_404(id)
        if 'name' in request.json:
            user.name = request.json['name']
        if 'phone' in request.json:
            user.phone = request.json['phone']
        if 'addr' in request.json:
            user.addr = request.json['addr']
        db.session.commit()
        return user_schema.dump(user)

    def delete(self, id):
        user = User.query.get_or_404(id)
        db.session.delete(user)
        db.session.commit()
        return '', 204


api.add_resource(UserResource, '/user/<int:id>')


# product api
class ProductListResource(Resource):
    def get(self):
        products = Product.query.all()
        return products_schema.dump(products)

    def post(self):
        new_product = Product(
            title=request.json['title'],
            category_id=request.json['category_id']
        )
        db.session.add(new_product)
        db.session.commit()
        return product_schema.dump(new_product)


api.add_resource(ProductListResource, '/product/')


class ProductResource(Resource):
    def get(self, id):
        product = Product.query.get_or_404(id)
        return product_schema.dump(product)

    def patch(self, id):
        product = Product.query.get_or_404(id)
        if 'title' in request.json:
            product.title = request.json['title']
        if 'category_id' in request.json:
            product.category_id = request.json['category_id']
        db.session.commit()
        return product_schema.dump(product)

    def delete(self, id):
        product = Product.query.get_or_404(id)
        db.session.delete(product)
        db.session.commit()
        return '', 204


api.add_resource(ProductResource, '/product/<int:id>')


class ProductsByCategoryResource(Resource):
    def get(self, id):
        category = Category.query.get_or_404(id)
        products = category.all_children()
        return products_schema.dump(products)


api.add_resource(ProductsByCategoryResource, '/products-by-category/<int:id>')


class ProductsByUserResource(Resource):
    def get(self, id):
        user = User.query.get_or_404(id)
        products = user.all_children()
        return products_schema.dump(products)


api.add_resource(ProductsByUserResource, '/products-by-user/<int:id>')
