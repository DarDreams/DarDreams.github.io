let caliber = `
{DATA1(1)}"14":[]}
`;
let caliber2 = `
{"Log"{DATA2(1)}:true}
`;

function fix(obj) {
    let brokenObject = obj;
    let fixedObject = brokenObject.replace(/'/g, '"').replace(/([a-zA-Z]+):/g, '"$1":');
    fixedObject = JSON.parse(fixedObject);
    return fixedObject;
}

caliber = fix(caliber);
caliber2 = fix(caliber2);

export  {caliber, caliber2};
