const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        //소문자,숫자,-_.가 ^(not)인거 없애기
        .replace(/[^\w\d-_.]/g, '')
        // .이 두번이상반복되는거 .으로 치환
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/\.$/g, '')
    return id.padEnd(3, id[id.length-1])
}