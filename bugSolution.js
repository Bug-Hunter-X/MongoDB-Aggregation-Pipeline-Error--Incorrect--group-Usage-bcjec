```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {
    $match: { field: { $exists: true } }
  },
  {
    $group: {
      _id: { $ifNull: [ "$field", "nullValue" ] },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  }
]);
```