# Game project 
begin : 2022 March 

- [Files explanation](#files-explanation)
- [SCSS](#scss)
    - [Key Idea & Key Element](#key-idea--key-element)
        - [Grid Template](#grid-template)
        - [Calculate Position](#calculate-position)
        - [Color Changing](#color-changing)
        - [Keyframes & Animation](#keyframes--animation)
    - [Issues](#issues)
        - [Calc() expression issue on scss](#calc-expression-doesnt-work)
            - [calc() issue's solution](#solution-at-calc-expression-problem-on-scss)
        - [Calc & Multiplication issue on scss](#calc-multiplication-problem-on-scss)
            - [Calc & multiplication issue's solution](#solution-to-the-second-issue)
        - [How to allow CSS file to have SCSS variables?](#how-to-allow-css-file-to-have-scss-variables)
- [js](#js)


# Files explanation 
- [layout.sass](/sass/layout.sass) is a test file use to find and resolve issue
- [grid.js](/js/grid.js) import to [script.js](/js/script.js)


# SCSS 
## Key Idea & Key Element

### Grid template 
We need to make 4*4 tab so : 
````scss
//sizes
$case-size : 20vmin;
$grid-repeat-number : 4;
$gap : 2vmin;

#game-box{
    display: grid; //initialization
    //repeat $grid-repeat-number (4) times $box-size
    grid-template-columns: repeat($grid-repeat-number, $case-size);
    grid-template-rows: repeat($grid-repeat-number, $case-size);
    grid-gap: $gap;
}
````
The container, "game-box", should be on position : relative and the number should be on position : absolute 


### Calculate position 
At each time the box move on cell, it has to move the cell size, $case-size, and the grid-gap size
- $x and $y vary from 0 to 3 : 
    - $x : 0 and $y : 0 mean the number is at the top left cell on the tab 
    - $X : 3 and $y : 0 mean the number is at the bottom left cell on the tab
    - ... 

We need to * per $x for the horizontal position and * per $y for the vertical position to get the correct cell position 

We need also add $gap corresponding at the padding of the container (game-box) if we put an padding to have the correct position

````scss
//sizes
$case-size : 20vmin;

//calc
$x : 2; //horizontal case's number 
$y : 1; //vertial case's number

$fx : #{$x} * calc( #{$gap} + #{$case-size} ) + #{$gap}; //function position x
$fy : #{$y} * calc(#{$gap} + #{$case-size}) + #{$gap}; // function position y 
.number{
    //position number center case 
    position: absolute;
    display: flex; // to make able to move the box 
    justify-content: center;
    align-items: center;
    height: $case-size;
    width: $case-size;
    
    //calc position number
    left : calc( #{$fx} );
    top : calc( #{$fy} );
}
````

### Color Changing 
In order to change the color on js file, we need to set up the css file like : 
````scss
//Initialization 
//color lightness
$number-background-lightness : 20%;
$number-txt-lightness : 80%;

//number color hue & saturation
$number-color-hue : 172;
$number-color-saturation : 96%;


.number{
    color: hsl($number-color-hue, $number-color-saturation, $number-txt-lightness);
    background-color: hsl($number-color-hue, $number-color-saturation, $number-background-lightness);
            
}

````
We can for example change the lightness depending on the number


### Keyframes & Animation 
````scss
@keyframes rotateanimationblock {
    //animation for a specific's attribute
    from{transform: rotateZ(O);}to{transform: rotateZ(20deg);}
}
div{
    animation-name: rotateanimationblock; //@keyframe name
    animation-delay: 1s;
    animation duration: 5s; 
    animation-timing-function: ease; //animation style
    animation-iteration-count: infinite; //loop
}
````
- animation attribute : 
    - duration | easing-function | delay |iteration-count | direction | fill-mode | play-state | @keyframe name
    - @keyframe name | duration | easing-function | delay
    - @keyframe name | duration


````scss
@keyframes change_colors_scale {
    100%{
        background-color : red;
        scale : 100%;
    }
    50%{
        background-color : yellow;
        scale : 50%;
    }
    0%{
        background-color : yellow;
        scale : 0%;
    }
    
}
div{
    animation : 3s ease-in 1s 2 reverse both paused change_colors_scale;
}
````

for this project : 

````scss
@keyframes load-number-animation {
    from{
        opacity : 0%;
        scale : 0;
    }
    to{
        scale: 1;
    }
}

.number{
    animation: load-number-animation 400ms ease;
}
````


### Transition 
````scss
.number{
    // transition when number case move 
    transition : 150ms ease-in-out;
}
````





### Issues 
#### Calc() expression doesn't work
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

##### Solution at calc() expression problem on scss 
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
#### Calc() Multiplication problem on scss
 but another problem : the navigator doesn't considerate the right function, it calculation $fx without considerate the () 
=> the multiplication apply only on $gap and not $gap + $case-size

##### Solution to the second issue : 
````scss
    $fx : #{$x} * calc( #{$gap} + #{$case-size} ) + #{$gap}; //function position x
    $fy : #{$y} * calc(#{$gap} + #{$case-size}) + #{$gap}; // function position y 
````
or 
````scss
    $fx : #{$x} * #{$gap} + #{$x} #{$case-size}  + #{$gap}; //function position x
    $fy : #{$y} * #{$gap} + #{$y} * #{$case-size} + #{$gap}; // function position y 
````


#### How to allow CSS file to have SCSS variables?
with @use "sass:meta" ? 
with @mixin and @function & @return? 
with @root? 

# js 

## [grid file](/js/grid.js)
Make the container by js and not html in order to control and modify its easier after 
- define the variable on grid.js : case-size, grid-repeat-number, gap