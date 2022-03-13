## Game project 
begin : 2022 March 


### Files explanation 
- layout.sass [/sass/layout.sass] is a test file use to find and resolve issue


### Issues 
Why calc($fx) and calc($fy) don't work but $fx and $fy seems to calculate itself?
    with : 
```` scss
    //sizes
    $case-size : 20vmin;
    $grid-repeat-number : 4;
    $gap : 2vmin;
    $case-border-radius : 1vmin;

    //calc
    $x : 0; //horizontal case's number 
    $y : 2; //vertical case's number

    $fx : $x * ( $gap + $case-size ) + $gap; //function position x
    $fy : $y * ( $gap + $case-size ) + $gap; // function position y 

        .number{
            //work : 
            left : $fx;
            top : $fy;

            // //don't work : 
            // left : calc($fx);
            // top : calc($fy);
        }
````

==> is it a compile error? 


- first solution : 
    => use **(Interpolation)[https://sass-lang.com/documentation/interpolation]** : **#{$var}** to considerate the variable and not only the number like : 
```` scss
    //sizes
    $case-size : 20vmin;
    $grid-repeat-number : 4;
    $gap : 2vmin;
    $case-border-radius : 1vmin;

    //calc
    $x : 0; //horizontal case's number 
    $y : 2; //vertical case's number

    $fx : #{$x} * ( #{$gap} + #{$case-size} ) + #{$gap}; //function position x
    $fy : #{$y} * (#{$gap} + #{$case-size}) + #{$gap}; // function position y 

        .number{
            left : calc(#{$fx});
            top : calc(#{$fy});
        }
````

- but another problem : the navigator doesn't considerate the right function, it calculation $fx without considerate the () 
=> the multiplication apply only on $gap and not $gap + $case-size

- Solution to the second issue : 
````scss
    $fx : #{$x} * calc( #{$gap} + #{$case-size} ) + #{$gap}; //function position x
    $fy : #{$y} * calc(#{$gap} + #{$case-size}) + #{$gap}; // function position y 
````
or 
````scss
    $fx : #{$x} * #{$gap} + #{$x} #{$case-size}  + #{$gap}; //function position x
    $fy : #{$y} * #{$gap} + #{$y} * #{$case-size} + #{$gap}; // function position y 
````