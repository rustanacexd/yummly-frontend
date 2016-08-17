export const recipe = {
    id: 0,
    userId: 0,
    title: "",
    description: "",
    image: "",
    ingredientsCount: 0,
    ingredients: [],
    calories: 0,
    totalTime: 0,
    rating: 0,
    servings: 0,
    category: "",
    taste: {
        salty: 0,
        savory: 0,
        sour: 0,
        bitter: 0,
        sweet: 0,
        spicy: 0
    },
    tags: [
        "hot",
        "seasonal",
        "cheap"
    ],
    averageRating: 0,
    numberOfReviews: 0
};

export const user = {
    id: 0,
    age: 0,
    gender: "",
    name: "",
    username: "",
    avatar: "",
    email: "",
    dob: "",
    phone: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
};

export const users = [], tags = [], recipes = [], relatedRecipes =[];
export const ajaxCallsInProgress = 0;
export const isLoadMore = false;
export const notification = { message: '', open: false};



