export abstract class BaseModel {

    protected constructor(obj){
        this.setFromSneakCaseToCamelCaseObject(obj);
    } 

    public toSneakCase(){
        var capitalRegex = /[A-Z]/g;
        var keys = Object.keys(this);
        var _this = {};

        keys.forEach(function(key){
            var newKey = key;
            var newKey = key.replace(capitalRegex, "_$&").toLowerCase();
            _this[newKey] = this[key];

            if(Object.prototype.toString.call(this[key]) === '[object Array]'){
                _this[newKey] = [];
                this[key].forEach(function(item){
                    _this[newKey].push(item.toSneakCase());
                });
            }
        }, this);
        return _this;
    }

    protected setFromSneakCaseToCamelCaseObject(obj){
        var sneakCaseRegex = /_[a-z]/g;
        var keys = Object.keys(obj);

        keys.forEach(function(key){
            var newKey = key;
            newKey = key.replace(sneakCaseRegex, function(sneakSymbole){
                return sneakSymbole[1].toUpperCase();
            });
            this[newKey] = obj[key];
        }, this);
    }
}




