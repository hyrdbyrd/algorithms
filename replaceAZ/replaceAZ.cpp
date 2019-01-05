#include <iostream>
#include <regex>
#include <cctype>

using namespace std;

void validate(string str) {
    int numbers = 0;
    int letters = 0;

    for (int i = 0; i < str.length(); i++) {
        string newS = str.substr(i, 1);

        if (regex_match(newS, regex("[A-Za-z]"))) letters++;
        else if (regex_match(newS, regex("[0-9]"))) numbers++;
    }

    cout << "Letters: " << letters << endl << "Numbers: " << numbers;
}