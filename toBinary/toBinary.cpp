#include <iostream>
#include <bitset>

using namespace std;

string toBinary(float n) {
    return bitset<64>(n).to_string();
}

int main() {
    cout << toBinary(25.03f) << endl;
    return 0;
}
