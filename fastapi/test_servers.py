import requests

# These requests work:
print(requests.get("http://127.0.0.1:8000/items?count=20").json())
print(requests.get("http://127.0.0.1:8000/items?category=tools").json())


# This request fails because 'ingredient' is not a valid category, as defined in the Category enum:
print(requests.get("http://127.0.0.1:8000/items?category=ingredient").json())


# These request fail because count has to be an integer:

# Here, validation occurs because of the specified type hints on the endpoint.
print(requests.get("http://127.0.0.1:8000/items/?count=Hello").json())

# And here, because of Pydantic.
print(
    requests.post(
        "http://127.0.0.1:8000/",
        json={"name": "Screwdriver", "price": 3.99, "count": 'Hello', "id": 4},
    ).json()
)

# These requests will result in an error, since price and count are negative:
print(requests.put("http://127.0.0.1:8000/update/0?count=-1").json())
print(requests.put("http://127.0.0.1:8000/update/0?price=-1").json())

# Similarly, an item_id must not be negative:
print(requests.put("http://127.0.0.1:8000/update/-1").json())

# And name cannot exceed 8 characters:
print(requests.put("http://127.0.0.1:8000/update/0?name=SuperDuperHammer").json())


print("Adding an item:")
print(
    requests.post(
        "http://127.0.0.1:8000/",
        json={"name": "Screwdriver", "price": 3.99, "count": 10, "id": 4, "category" : "tools"},
    ).json()
)
print(requests.get("http://127.0.0.1:8000/").json())
print()

print("Updating an item:")
print(requests.put("http://127.0.0.1:8000/update/0?count=9001").json())
print(requests.get("http://127.0.0.1:8000/").json())
print()

print("Deleting an item:")
print(requests.delete("http://127.0.0.1:8000/delete/0").json())
print(requests.get("http://127.0.0.1:8000/").json())