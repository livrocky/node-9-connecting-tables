const obj1 = {
  _id: '625e5f11a96b6c03f26d9afc',
  title: 'Book 1',
  year: 2008,
  rating: 4,
  authorArr: [
    {
      _id: '625eb24eab5dbc879a9e14bc',
      name: 'Grady book1',
      town: 'Kansas',
      bookId: '625e5f11a96b6c03f26d9afc',
    },
  ],
};
// obj1.authorName = obj1.authorArr[0].name;
// obj1.authorTown = obj1.authorArr[0].town;
// delete obj1.authorArr;
const objCopy = {
  title: obj1.title,
  year: obj1.year,
  rating: obj1.year,
  authorName: obj1.authorArr[0].name,
  authorTown: obj1.authorArr[0].town,
};
console.log('obj1===', obj1);
const result = {
  _id: '625e5f11a96b6c03f26d9afc',
  title: 'Book 1',
  year: 2008,
  rating: 4,
  name: 'Grady book1',
  town: 'Kansas',
};
