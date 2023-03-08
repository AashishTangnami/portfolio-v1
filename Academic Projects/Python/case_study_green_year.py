
import math
import numpy as np

MONTH = ['January', 'February', 'March', 'April', 'May', 'June',
         'July', 'August', 'September', 'October', 'November', 'December']

FROM_YEAR = 1900
TO_YEAR = 2100


def is_valid_year(year) -> bool:
    """ The function validates if the entered year is valid or not

    Args:
        year (int): Years ( before going green and after going green)

    Returns:
        boolean : Returns the either True or False for the year.
    """
    if year >= 1900 and year <= 2999:
        return True
    else:
        return False

def validate_year(i : str) -> int:
    
    """ This function validates if the entered year is in YYYY format or not

    Args:
        i (str): String value for year before going green and after.

    Returns:
        int : return the valid year in integer type.
    """
    
    try:
        input_year = int(input(f" Enter {i}"))
        if is_valid_year(input_year):
            return input_year
        else:
          print(" Enter year after 1900 A.D and before 2900 A.D ")
          input_year = validate_year(i)
    except ValueError:
        print(" Enter valid year in 'YYYY' format ")
        input_year = validate_year(i)
  
    return input_year


def create_year_list() -> list:
    """ Takes input from user of years before and after going green

    Returns:
        list: list of years
    """
    tmp_l = []
    year_green = " Enter 'YEAR' before green "
    year_after_green = " Enter 'YEAR' after green "
    tmp_l.append(year_green)
    tmp_l.append(year_after_green)
    years = []
    for i in range(len(tmp_l)):
        ret_years = validate_year(tmp_l[i])
        years.append(ret_years)
    
    return years
    
def validate_monthly_bills(i: int, year: str) -> list:
    """ This function validates the user input takes only float/int values

    Args:
        i (int): incremental value for each month
        year (str): input bills value in months for specific year

    Returns:
        list: list of user input with bills in float type.
    """

    try:
        input_bills = float(input(f" Enter bill of month {MONTH[i]} for {year}: "))
    except ValueError:
        print(f" Enter valid value for bill of month {MONTH[i]} for {year}:")
        input_bills = validate_monthly_bills(i, year)
    return input_bills


def monthly_bills(year: str) -> list:
    # Ajay Kumar Jha - 500208090
    """ Executes the validation of monthly bill if user enters wrong value.

    Args:
        year (str): specify year for monthly bills

    Returns:
        list: list of monthly bills for respective year in numpy array type
    """

    tmp_monthly_bill = []
    for i in range(len(MONTH)):
        ret_monthly_bill = validate_monthly_bills(i, year)
        tmp_monthly_bill.append(ret_monthly_bill)
    return np.array(tmp_monthly_bill)


def execute_monthly_bills(years: list) -> list:
    """ The function executes the monthly bills for respective year

    Args:
        years (list): list of years to be entered for monthly bill

    Returns:
        list: list of energy bills.
    """

    tmp_year_month_bill = []

    for i in range(len(years)):
        ret_monthly_bills = monthly_bills(years[i])
        tmp_year_month_bill.append(ret_monthly_bills)
    return tmp_year_month_bill


def calculate_savings(monthly_bill: list) -> tuple:
    """ The function calculates the amount of energy bills after going green.

    Args:
        monthly_bill (list): list of monthly energy bill.

    Returns:
        tuple: list and dictionary of calculated savings after going green.
    """
    tmp_month_saving_dict = {}
    before_green_year = monthly_bill[0]
    green_year = monthly_bill[1]
    savings_per_month = before_green_year - green_year

    for i in range(len(MONTH)):
        tmp_month_saving_dict[MONTH[i]] = savings_per_month[i]

    return savings_per_month, tmp_month_saving_dict


def validate_x_value(i: int, x_values: dict) -> dict:
    """ Validates X value from user inputs.

    Args:
        i (int): incremental value for each month
        x_values (dict): value of X in dictionary

    Returns:
        dict: validated dictionary values of X for each month.
    """
    try:
        ret_x_value = float(input(f" Enter X value of month {MONTH[i]} : "))
        x_values[MONTH[i]] = ret_x_value
    except ValueError:
        print(f"Enter numeric bill value for {MONTH[i]} : ")
        ret_x_value = validate_x_value(i, x_values)
        x_values[MONTH[i]] = ret_x_value

    return x_values


def input_x_values() -> tuple:
    """ Executes the validation of X values 

    Returns:
        tuple: returns the validated X values in dictionary and list type.
    """
    x_values = {}
    for i in range(len(MONTH)):
        validate_x_value(i, x_values)

    return x_values, [v for _, v in x_values.items()]


def pearson_coefficient(X: list, saving: list):
    """ The function calculates the pearson coefficient for X and Savings.

    Args:
        X (list): list value of X
        saving (list): list of savings bill after going green.

    Returns:
        str: returns the value of pearson_coefficient in string type.
    """
    N = len(X)

    x_saving_sum = sum(list(np.multiply(X, saving)))
    x_square_sum = sum(list(np.multiply(X, X)))

    saving_square_sum = sum(list(np.multiply(saving, saving)))

    numerator = (N * x_saving_sum) - (sum(X) * sum(saving))

    denominator = math.sqrt(((N * x_square_sum) - x_square_sum) * \
                            ((N * saving_square_sum) - saving_square_sum))

    R = numerator / denominator
    print("\n")
    print(f"Pearson correlation cofficient: {str(R)} ")
    print("\n")
    if R > 0:
        print(f" Positive Correlation with R: {R} ")
    elif R == 0:
        print(f" No Correlation with R: {R} ")
    elif R < 0:
        print(f" Negative Correlation with R: {R} ")


def print_bills(years, monthly_bill, x_list, saving, max_month, min_month, average_saving):

    print("%13s %8d  %8d  %8s  %8s  %8s  %8s  %13s" % \
          ('Month', int(years[0]), int(years[1]), 'X', 'Savings', 'Max.Saving', 'Min.Saving', 'Avg.Saving'))
    print("%13s %8s  %8s  %8s  %8s  %8s  %8s  %13s" % \
          ('*****', '****', '****', '*', '******', '*********', '**********', '*********'))
    for i in range(len(MONTH)):
        if i == 0:
            print('%13s %8d  %8s  %8s  %8s  %8s  %8s  %13s' % \
                  (MONTH[0], monthly_bill[0][0], monthly_bill[1][0], \
                   x_list[0], saving[0], max_month, min_month, average_saving))
        else:
            print('%13s %8s  %8d  %8d  %8d' % \
                  (MONTH[i], monthly_bill[0][i], monthly_bill[1][i], x_list[i], saving[i]))


def return_month_of_savings(monthly_saving: dict, max_saving: float, min_saving: float) -> list:
    """_summary_

    Args:
        monthly_saving (dict): _description_
        max_saving (float): _description_
        min_saving (float): _description_

    Returns:
        list: _description_
    """
    months_max_min = []
    for k, v in monthly_saving.items():
        if v == max_saving:
            months_max_min.append(k)
        if v == min_saving:
            months_max_min.append(k)
    return months_max_min


def main():
    
    years = create_year_list()
    monthly_bill = execute_monthly_bills(years)
    saving, monthly_saving = calculate_savings(monthly_bill)

    max_saving = max(saving)
    min_saving = min(saving)
    average_saving = round(sum(saving) / len(saving), 2)

    max_month = return_month_of_savings(monthly_saving, max_saving, min_saving)[0]
    min_month = return_month_of_savings(monthly_saving, max_saving, min_saving)[1]

    _ , x_list = input_x_values()
    p_c = pearson_coefficient(x_list, saving)

    print("\n")
    print(f' Maximum savings is {max_saving} in month {max_month}')
    print(f' Minimum savings is {min_saving} in month {min_month}')
    print(f' Pearson Coefficient - R : {p_c}')
    print("\n")
    print_bills(years, monthly_bill, x_list, saving, max_month, min_month, average_saving)


if __name__ == "__main__":
    main()
