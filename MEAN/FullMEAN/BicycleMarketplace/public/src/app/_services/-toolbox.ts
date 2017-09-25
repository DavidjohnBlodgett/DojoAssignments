export class Toolbox {
    search(arr, key, val){
        for (var i=0; i < arr.length; i++) {
            if (arr[i][key] == val) {
                return arr[i];
            }
        }
        return {};
    }
    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    sortUsers() {
        // NOTE: if data comes back in order, you can call a .reverse() on array to sort...
        // sort by value
        // this.users.sort(function (a, b) {
            // return a.votes - b.votes; // lowest first...
            // return b.votes - a.votes; // largest first...
        // });
        // console.log(this.users);
    }
}
