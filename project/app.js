// Code goes here

var testTaskApp = angular.module('testTask', ['ngStorage']);

testTaskApp.controller('Items', function ItemListController($localStorage) {
  var ilc = this;
  ilc.items = [];
  var initial = [{
    id: 1,
    name: 'First item with custom name',
    commentNumber: 142,
    comments: [{
      text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
    }, {
      text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
    }, {
      text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
    }]

  }, {
    id: 2,
    name: 'Second item is active',
    commentNumber: 3,
    comments: [{
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }, {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }, {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }]
  }];

  ilc.$onInit = function () {
    ilc.items = $localStorage.items || initial;
    ilc.currentItem = ilc.items[0];
  };


  ilc.newItem = {
    name: '',
    commentNumber: 0,
    id:ilc.items.length + 1,
    comments:[]
   };

  ilc.newComment = {
    text: '',
  };

  ilc.addToItems = function (e, arr, newArr) {
    e.preventDefault;
    ilc.getId();
    arr.push(angular.copy(newArr));
    ilc.save();
    ilc.newItem.name = '';
  };
  ilc.deleteItem = function (item) {
    var index = ilc.items.indexOf(item);
    ilc.items.splice(index, 1);
    ilc.save();
  };
  ilc.setCurrentItem = function (item) {
    console.log(item);
    ilc.currentItem = item;
  };
  ilc.addNewComment = function () {
    ilc.currentItem.comments.push(angular.copy(ilc.newComment));
    ilc.currentItem.commentNumber += 1;
    ilc.save();
    ilc.newComment.text = '';
  };
  ilc.getId = function (){
    var newId =  ilc.items.length;
    console.log(newId);
    console.log(123, ilc.items.length);
    return ilc.newItem.id = newId + 1;
  };

  ilc.save = function(){
    // localStorage.setItem('items', JSON.stringify(ilc.items));
    $localStorage.items = ilc.items
  }
});

