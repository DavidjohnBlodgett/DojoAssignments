( function(global) {
    global.$Dojo = function(id) {
        var obj = {};
        obj.id = id;
        obj.click = function(cb){
            document.getElementById(this.id).addEventListener("click", cb);
        }
        obj.hover = function(cb1,cb2){
            document.getElementById(this.id).addEventListener("mouseover", cb1);
            document.getElementById(this.id).addEventListener("mouseout", cb2);
        }
        return obj;
    }
}(window));
