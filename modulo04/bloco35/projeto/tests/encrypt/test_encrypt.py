import pytest
from challenges.challenge_encrypt_message import encrypt_message


def test_encrypt_message():
    with pytest.raises(TypeError):
        encrypt_message('dani', 'dani')

    with pytest.raises(TypeError):
        encrypt_message(3, 'dani')

    message_1 = encrypt_message('dani', 13)
    assert message_1 == 'inad'

    message_2 = encrypt_message('dani', 3)
    assert message_2 == 'nad_i'

    message_3 = encrypt_message('dani', 2)
    assert message_3 == 'in_ad'
