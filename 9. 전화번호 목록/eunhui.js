function solution(phone_book) {
    let answer = true;
    const phoneBook = phone_book.sort();

    for (let i = 0; i < phoneBook.length; i++) {
        const current = phoneBook[i];
        const next = phoneBook[i + 1];

        if (next && next.startsWith(current)) {
            return false;
        }
    }

    return answer;
}

solution(['119', '97674223', '1195524421']);
solution(['123', '456', '789']);
solution(['12', '123', '1235', '567', '88']);
