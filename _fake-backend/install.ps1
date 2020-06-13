# install backend
echo "INSTALLING BACKEND DEPENDENCIES"
python -m venv env
./env/Scripts/activate.ps1
pip install -r r.txt

# setup flask
echo "SETTING UP FLASK"
python ./create_db.py
python ./insert_db.py