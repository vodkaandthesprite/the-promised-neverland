# import time
#
#
# class Char:
#     pass
#
#
# Odinn = Char()
# Odinn.name = "Odinn"
# Loki = Char()
# Loki.name = "Loki"
# Loki.age = 3500
# Loki.stamina = 1000
#
# person = {
#     "name": "Ash",
#     "age": 16,
#     "mana": 100
# }
# person2 = {
#     "name": "Loki",
#     "age": 3500,
#     "mana": 10000
# }
# phrase = f"my name is {person['name']}"
# phrase1 = f"i have {person['mana']} mana points"
# phrase2 = f"{person2['name']} is powerful"
class Animal:
    def victim(self):
        print('i\'m an animal \nand not a plant')

    def is_mushroom(self):
        print("no!")
        print("of course i'm not a mushroom")

    def voice(self):
        if self is cat:
            print("meow")
        elif self is dog:
            print("woof")
        else:
            print("*silence*")

cat = Animal()
cat.victim(), cat.voice()
dog = Animal()
dog.victim(), dog.voice()
