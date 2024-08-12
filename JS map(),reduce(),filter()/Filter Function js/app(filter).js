//    EXAMPLE # 1

const fruits = ["orange", "apple", "mango", 'melon'];

const filterFruits = fruits.filter(fruits => (
    !fruits.includes('o')
))

console.log(filterFruits);









// EXAMPLE # 2

const books = [
    {
        name: "To Kill a Mockingbird",
        genre: "Fiction",
        published: 1960,
        newEdition: "2015-07-14"
    },
    {
        name: "The Sorcerer's Stone",
        genre: "Dystopian",
        published: 1949,
        newEdition: null
    },
    {
        name: "The Great Gatsby",
        genre: "Classic",
        published: 1925,
        newEdition: "2004-09-30"
    },
    {
        name: "Harry Potter",
        genre: "Fantasy",
        published: 1997,
        newEdition: "2017-10-03"
    },
    {
        name: "The Hobbit",
        genre: "Fantasy",
        published: 1937,
        newEdition: "2003-11-08"
    }
];

// const newBooksArr = books.filter ((bk) => bk.published > 1990);
const newBooksArr = books.filter ((bk) => bk.genre === "Fantasy");

console.log(newBooksArr);

