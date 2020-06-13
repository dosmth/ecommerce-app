from app import create_app, db


def setup_database(app):
    with app.app_context():
        db.create_all()


app = create_app()
setup_database(app)
