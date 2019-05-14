/**
 * profile
 * @url /profile?uid=123
 */
module.exports = function (req) {
    var uid = req.query.uid;
    
    console.log(uid);
  
    if (!uid) {
      return { msg: 'please with parameter uid as ?uid=123' }
    }
    
    return {
        "uid": +uid,
        "phone": "139@string('number',8)",
        "photo": "",
        "sex": "男",
        "birthday": "@date",
        "notes": "@csentence",
        "cdate": "@datetime"
    };
    
  };
  