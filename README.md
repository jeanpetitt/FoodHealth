## Algorithme du sac a dos
If we consider that our body is a bag that should be filled with food1 (x1 quantity), food2 (x2 quantity), food3
(x3 quantity), water (y quantity). Xi is the maximum quantity of foodi that the body should contain.

## Solution
To build a solution of that problem we will use dynamic programmation

### Let go

    alogrihtm body_bag
    var i, j:integer,
    T[1...Q_body, 1..n]:integer
    begin
        // initialisation of the quantity of the food
        for j = 0 to Q_body:
            T[0, j] = 0
        endfor
        for i=1 to n:
            for j=0 to Q_body:
                if j >= q_food[i]:
                T[i,j] = max(T[i-1,j], T[i-1, j-q_food[i]]+ v[i])
                else:
                    T[i, j] = T[i-1, j]
                endif
            endfor
        endfor
        return T
    end




