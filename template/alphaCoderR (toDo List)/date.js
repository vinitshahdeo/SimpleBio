//jshint esversion:6

//  Simplified approach
/*
function getdate() {
    const today=new Date();
    const options={
        month:"long",
        day:"2-digit",
        weekday:"long"
    };

    return today.toLocaleDateString("en-us",options);
}

exports.getdate=getdate;
*/


//  Shortcut approach
exports.getdate=function() {
    const today=new Date();
    const options={
        month:"long",
        day:"2-digit",
        weekday:"long"
    };

    return today.toLocaleDateString("en-us",options);
};
