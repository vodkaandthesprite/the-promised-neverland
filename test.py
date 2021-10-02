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
# print(phrase2)
# class Animal:
#     def victim(self):
#         print('i\'m an animal \nand not a plant')
#
#     def is_mushroom(self):
#         print("no!")
#         print("of course i'm not a mushroom")
#
#     def voice(self):
#         if self is cat:
#             print("meow")
#         elif self is dog:
#             print("woof")
#         else:
#             print("*silence*")
#
# cat = Animal()
# cat.victim(), cat.voice()
# dog = Animal()
# dog.victim(), dog.voice()
# import lib
# lib.manga
# def h1(value):
#     print(f'<h1>{value}</h1>')
#
#
# def h2(value):
#     print(f'<h2>{value}</h2>')
#
#
# def h(number, value):
#     return f'<h{number}>{value}</h{number}>'
#
#
# h(5, "button doesn't work")
# h(2, "button doesn't work")
# h2("button doesn't work")
file = open("test.txt", "r")
text = file.read()
print(text)
file.close()
f = open("test.txt", "a")
f.write("world")
f.write("!")
f.close()
f = open("test.txt", "w")
f.write("1234")