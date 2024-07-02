/**
 * Initialize your data structure here.
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.currentPage = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    // 현재 위치 이후에 있던 기록은 모두 제거되어야 하기 때문에
    // visit 때 slice를 사용하여 이후 기록은 삭제한다.
    this.history = this.history.slice(0, this.currentPage + 1);
    // 현재 방문한 url을 추가한다.
    this.history.push(url);
    // currentPage를 1 증가시킨다.
    this.currentPage++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    // 뒤로가기를 할 때 음수가 되는 걸 방지하기 위해 Math.max를 사용하여 처리
    this.currentPage = Math.max(0, this.currentPage - steps);

    return this.history[this.currentPage];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    // currentPage보다 초과하는 것을 방지하기 위해 Math.min을 사용
    this.currentPage = Math.min(this.currentPage + steps, this.history.length - 1);

    return this.history[this.currentPage];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
