from DB_Connections.dbUsers import Users

def test_new_user(create_user):
    user = Users('Daego','daegotesting@gmail.com','Daegod123',1)
    assert user.fullname == 'Daego'
    assert user.mail == 'daegotesting@gmail.com'
    assert user.passwd != 'Daegod123'
    assert user.rol == 1
