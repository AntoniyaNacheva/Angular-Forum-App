# REST-api for Angular project

## Getting started

Let's make our first API request to the REST-api!

In the example below, we're trying to get information about the REST-api:

`https://localhost:3000/api/test`

Here is the response we get:

```
{
    "name": "rest-api",
    "version": "1.0.0",
    "description": "REST-api for back-end of Angular project",
    "main": "index.js",
}
```

## Base URL

The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.

The Base URL for the API is:

`https://localhost:3000/api`

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

# Endpoints: Users

- `/users/register` -- signing up;
- `/users/login` -- signing in;
- `/users/logout` -- logging out;

## Register User

Signs up user and returns the registered data as json.

### URL --> `/users/register`

### Method --> `POST`

Required:

`email` : [string] -- The email of the person is required and must be unique;

`username` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

`password` : [string] -- The password of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;

Not Required

`tel` : [string] -- Optional;

### Error Response:

Code: 409 CONFLICT

Content:

```
{
    "message": "This email/username is already registered!"
}
```

## Login User

Signs in user and returns the registered data as json.

### URL --> `/users/login`

### Method --> `POST`

Required:

`username` : [string] -- The username of the person

`password` : [string] -- The password of the person

### Success Response:

Code: 200

Content:

```
{
    "themes": ["5f85c51996b5601b2406e5b7"],
    "posts": ["5f86bdcde012743fe4f5b324"],
    "_id": "5f1875690916010017964978",
    "name": "John Doe",
    "email": "john@email.com",
    "username": "Johny",
    "created_at": "2020-10-14T08:04:12.196Z",
    "updatedAt": "2020-10-14T08:58:53.589Z"
}
```

### Error Response:

Code: 401 Unauthorized

Content:

```
{
    "message": "Wrong username or password"
}
```

## Logout User

Logout user.

### URL --> `/users/logout`

### Method --> `POST`

### Success Response:

Code: 401 Unauthorized

Content:

```
{
    "message": "Logged out!"
}
```

# Endpoints: Themes

- `/themes`
- `/themes/:themeId`

## Get Themes

Returns all themes as json.

### URL --> `/themes`

### Method --> `GET`

### Success Response:

Code: 200

Content:

```
[
    {
        "subscribers": ["5f8580d25d1da62568dd38fd"],
        "posts": ["5f858dd2d895ad23602db9d5"],
        "_id": "5f858dd2d895ad23602db9d4",
        "themeName": "Some Theme",
        "userId": "5f8580d25d1da62568dd38fd",
        "created_at": "2020-10-13T11:21:54.863Z",
        "updatedAt": "2020-10-13T11:21:54.898Z",
        "__v": 0
    }
]
```

### Error Response:

Code: 500 Internal Server Error

Content:

```
{
    message: "Something went wrong!"
}
```

## Post Theme

Creates new Theme with the first post of the author and returns the theme as json.

### URL --> `/themes`

### Method --> `POST`

### Body -->

```
{
    "themeName": "Some Theme Title",
    "postText": "Some Post text"
}
```

Required:

`themeName` : [string] -- The Title of your new Theme, which you want to create
`postText` : [string] -- The text of your post. This post will be append as first comment on your Theme.

### Error Response:

Code: 500 Internal Server Error

Content:

```
{
    message: "Something went wrong!"
}
```

## Create Post

Creates new Post of the author and returns the theme as json.

### URL --> `/themes/:themeId`

### Method --> `POST`

### Body -->

```
{
    "postText": "Some Post text"
}
```

### Error Response:

Code: 500 Internal Server Error

Content:

```
{
    message: "Something went wrong!"
}
```

# Endpoints: Posts

- `/themes/:themeId/posts/:postId`

## Edit Post

Edit Post if the user is the author of the post and returns the changed post.

### URL --> `/themes/:themeId/posts/:postId`

### Method --> `PUT`

### Body -->

```
{
    "postText": "Changed text"
}

### Error Response:

Code: 401 Unauthorized

Content:
```

{
message: "Not allowed!"
}

```

Code: 500 Internal Server Error

Content:
```

{
message: "Something went wrong!"
}

````

## Delete Post
Deletes Post if the user is the author of the post and returns the deleted post.

### URL --> ```/themes/:themeId/posts/:postId```

### Method --> ```DELETE```

### Error Response:

Code: 401 Unauthorized

Content:
````

{
message: "Not allowed!"
}

```

Code: 500 Internal Server Error

Content:
```

{
message: "Something went wrong!"
}

````
## Like Post
Adds like to the post.

### URL --> ```/likes/:postId```

### Method --> ```PUT```

### Success Response:

Code: 200

Content:
````

{
message: "Liked successful!"
}

```

### Error Response:

Code: 500 Internal Server Error

Content:
```

{
message: "Something went wrong!"
}

```




<!-- users
.post /register - register new user
.post /login - login user
.post /logout - logout user

.get /profile - get user info
.post /profile - post user info
.put /profile - edit user info

themes
.get /themes - lists all themes
.post /themes - create new theme only for registered users

posts:
.get themes/id - get all posts for theme
.post themes/id - create post in theme by id only for registered users
.put themes/id/posts/id - edit post only possible for author
.delete themes/id/posts/id - delete post only possible for author -->
```
