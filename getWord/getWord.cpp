#include <iostream>
using namespace std;

string getWord(string str, int n) {
    int word = 0;
    bool isSlice = false;

    int start;
    int end;

    for (int i = 0; i < str.length(); i++) {
        const char symb = str[i];

        if (!isSlice && symb != ' ') {
            isSlice = true;
            start = i;

            word++;
        } else if (isSlice && symb == ' ') {
            isSlice = false;
            end = i;

            if (word >= n) return str.substr(start, end - start);
        }
    }

    if (word < n) {
        return "";
    }

    return str.substr(start, end - start);
}

int main () {
    int n;
    string str;

    cout << "What's word do you whant slice: ";
    cin >> n;

    cout << "And string: ";
    cin >> str;

    cout << endl << "Result: " << getWord(str, n) << endl;

    return 0;
}