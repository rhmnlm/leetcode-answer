/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {

    const regex = /^[a-zA-Z0-9\_]*$/;
    const validCategories = ["electronics", "grocery", "pharmacy", "restaurant"]

    const couponCategoryMap = {};
    let validCoupons = [];
    
    for(let i = 0; i < code.length; i++){
        if(!regex.test(code[i]) || code[i] == "") continue;
        if(!isActive[i]) continue;
        if(!validCategories.includes(businessLine[i])) continue;

        if (couponCategoryMap[businessLine[i]]) {
            couponCategoryMap[businessLine[i]].push(code[i]);
        } else {
            couponCategoryMap[businessLine[i]] = [code[i]];
        }
    }

    

    for(const category of validCategories){
        if(couponCategoryMap[category]){
            let couponList = couponCategoryMap[category];
            couponList.sort();
            validCoupons = [...validCoupons, ...couponList];
        }
    }

    return validCoupons;
};