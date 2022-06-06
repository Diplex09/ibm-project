from DB_Connections.dbUsers import Users

def test_new_user():
    user = Users('Test Admin','testadmin@ibm.com','pbkdf2:sha256:260000$zaUZiqIsUom0M1Cq$41505f9ddf53fda2a5cf99ea6f569cb15577a40e574df494370189f39b99ef97',1)
    assert user.fullname == 'Test Admin'
    assert user.mail == 'testadmin@ibm.com'
    assert user.passwd == 'pbkdf2:sha256:260000$zaUZiqIsUom0M1Cq$41505f9ddf53fda2a5cf99ea6f569cb15577a40e574df494370189f39b99ef97'
    assert user.rol == 1
