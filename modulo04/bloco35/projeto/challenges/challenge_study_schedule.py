def study_schedule(permanence_period, target_time):
    try:
        result = sum(
                1 for ins,
                out in permanence_period if ins <= target_time <= out
            )
        # print(result)
        return result

    except TypeError:
        return None
