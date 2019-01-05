#include <iostream>
#include <regex>
#include <cctype>

using namespace std;

string toLowerCase(string str) {
    string res = "";

    for (int i = 0; i < str.length(); i++)
        res += tolower(str[i]);

    return res;
}

bool isPolindrome(string str) {
    regex validSymbols("[^a-z]");
    str = regex_replace(toLowerCase(str), validSymbols, "");

    int offset = 0;
    const int len = str.length();

    while (offset++ < len / 2)
        if (str[offset] != str[len - offset - 1])
            return false;

    return true;
}
