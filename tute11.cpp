#include<iostream>

using namespace std;

int main(){   // BREAK & CONTINUS
   for (int i = 0; i < 40; i++) /*jar aapan yamadhe i=0 gheun i<4 jar lihile tar 
                        aaplyala 0 te 3 paryant number print hotat*/
   {
    
    cout<<i<<endl;
    if(i==20){
        break;   /* mhanje aapam jar 1 te 40 paryant number print kele aani jar aaplyala te
                 20 payant thambayche aahe yasathi hi method vapartat */
    }
   }
        cout<<"---------------------------------"<<endl;
       /* jar aaplaytala ekhada number print karaycha nasel tar*/
       for ( int i = 0; i < 40; i++)
       {
        if(i==2){  /* ya madhe aapna ekach number dilit karu shakto*/
            continue;
        }
        
        cout<<i<<endl;


        
       }
       
    return 0;
}