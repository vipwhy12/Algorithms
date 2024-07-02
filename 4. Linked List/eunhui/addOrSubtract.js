const numbers = [2, 3, 1];
let target_number = 0;
let result_count = 0;

function get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, current_index, current_sum) {
    if (current_index === target) {
        result_count += 1;
        return;
    }

    get_count_of_ways_to_target_by_doing_plus_or_minus(
        array,
        target,
        current_index + 1,
        current_sum + array[current_index]
    );
    get_count_of_ways_to_target_by_doing_plus_or_minus(
        array,
        target,
        current_index + 1,
        current_sum - array[current_index]
    );
}

get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number, 0, 0);
console.log(result_count);
