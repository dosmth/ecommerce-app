from app import create_app, db

from app.main.models import *

import random


def setup_database(app):
    with app.app_context():
        category_1 = Category(id=1, url="cat-1", title="Категория 1")
        category_2 = Category(id=2, url="cat-2", title="Категория 2")
        category_3 = Category(id=3, url="cat-3", title="Категория 3")
        category_4 = Category(id=4, url="cat-4", title="Категория 4")
        category_5 = Category(id=5, url="cat-5", title="Категория 5")

        user_1 = User(id=1, name="Пользователь 1",
                      phone="+71001112233", addr="Адрес 1", img="user1.jpg")
        user_2 = User(id=2, name="Пользователь 2",
                      phone="+72002223311", addr="Адрес 2", img="user2.jpg")
        user_3 = User(id=3, name="Пользователь 3",
                      phone="+73002223311", addr="Адрес 3", img="none")

        # рандомно генерим товары
        random.seed(1)
        descriptions = ["С первого дня в чехле и с защитным стеклом.", "За все время использовался очень бережно",
                        "Не разу не ремонтировался", "Не вскрывался", "Работает без нареканий"]
        images = ["product1.jpg", "product2.jpg", "product3.jpg", "none", ]
        product_list = []
        for i in range(200):
            _id = i
            _title = "Товар "+str(i)
            _category_id = random.randint(1, 5)
            _user_id = random.randint(1, 3)
            _img = random.choice(images)
            _price = random.randint(2000, 10000)
            _descr = random.choice(descriptions)
            product = Product(id=_id, title=_title, category_id=_category_id,
                              user_id=_user_id, img=_img, price=_price, descr=_descr)
            db.session.add(product)

        # product_1 = Product(id=1, title="Товар 1", category_id=1,
        #                     user_id=1, img="product1.jpg", price="3999", descr="С первого дня в чехле и с защитным стеклом. За все время использовался очень бережно")
        # product_2 = Product(id=2, title="Товар 2", category_id=1,
        #                     user_id=1, img="product2.jpg", price="4999", descr="Не разу не ремонтировался")
        # product_3 = Product(id=3, title="Товар 3", category_id=1,
        #                     user_id=2, img="product3.jpg", price="5999", descr="Не вскрывался")
        # product_4 = Product(id=4, title="Товар 4", category_id=1,
        #                     user_id=2, img="product4.jpg", price="6999", descr="Работает без нареканий")
        # product_5 = Product(id=5, title="Товар 5", category_id=1, user_id=1, img="product1.jpg", price="3999",
        #                     descr="С первого дня в чехле и с защитным стеклом. За все время использовался очень бережно , отсюда и такое идеальное состояние")
        # product_6 = Product(id=6, title="Товар 6", category_id=2,
        #                     user_id=1, img="product2.jpg", price="4999", descr="Не разу не ремонтировался")
        # product_7 = Product(id=7, title="Товар 7", category_id=2,
        #                     user_id=2, img="product3.jpg", price="5999", descr="Не вскрывался")
        # product_8 = Product(id=8, title="Товар 8", category_id=2,
        #                     user_id=2, img="product4.jpg", price="6999", descr="Работает без нареканий")
        # product_9 = Product(id=9, title="Товар 9", category_id=3,
        #                     user_id=3, img="product5.jpg", price="7999", descr="Хранил в коробке")
        # product_10 = Product(id=10, title="Товар 10", category_id=3,
        #                      user_id=3, img="none", price="3999", descr="Без дефектов")

        db.session.add(category_1)
        db.session.add(category_2)
        db.session.add(category_3)
        db.session.add(category_4)
        db.session.add(category_5)

        db.session.add(user_1)
        db.session.add(user_2)
        db.session.add(user_3)

        # db.session.add(product_1)
        # db.session.add(product_2)
        # db.session.add(product_3)
        # db.session.add(product_4)
        # db.session.add(product_5)
        # db.session.add(product_6)
        # db.session.add(product_7)
        # db.session.add(product_8)
        # db.session.add(product_9)
        # db.session.add(product_10)

        db.session.commit()


app = create_app()
setup_database(app)
