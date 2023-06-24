#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<vector<int>>v;
    int n=3;
    for (int line = 1; line <= n+1; line++)
    {
        int C = 1; // used to represent C(line, i)
        for (int i = 1; i <= line; i++)
        {
            
            // The first value in a line is always 1
            v[line][i]=C;
            C = C * (line - i) / i;
        }
        cout<<"\n";
    }
    for(int i=0;i<=v[0].size();i++){
        cout<<v[0][i]<<endl;
    }
    return 0;
}