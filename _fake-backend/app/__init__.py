from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_marshmallow import Marshmallow


db = SQLAlchemy()
ma = Marshmallow()
api = Api()


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    cors = CORS(app, resources={r"/*": {"origins": "*"}})

    db.init_app(app)
    api.init_app(app)
    ma.init_app(app)

    # blueprints
    from app.main.routes import main
    app.register_blueprint(main, url_prefix='')

    # api blueprints
    from app.main.routes import api_main
    app.register_blueprint(api_main, url_prefix='')

    return app
