from dataclasses import dataclass


@dataclass
class Address:
    street: str
    number: int
    district: str


class User:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address


class Company:
    def __init__(self, name, address):
        self.name = name
        self.address = address


address = Address("Street", 0, "District")

print(address.street, address.number, address.district)
