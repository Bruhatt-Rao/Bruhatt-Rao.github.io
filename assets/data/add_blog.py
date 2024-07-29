content = """The Traveling Salesman Problem is a problem used to test computational optimization.

## Setup
given a list of cities (we can look at them as positions on a 2d grid) and the distance between each city (calculated during runtime using the pythagorean theorem) find the shortest path that goes through every point once and returns back to the original point.

## Solutions
### Brute Force
    -    This is the Most basic method and it's incredibly inefficient
    -    We can calculate how long it'll take to run the algorithm by finding how many permutations there are using (1/2(n-1)!) with 20 cities it would be 60,822,550,204,416,000 permutations. if we assume that it will take 0.5 milliseconds for each permutation, it would take around 964,335.2 years to run every possible path.
### Branch and Bound
    -    This is a slightly more efficient algorithm but it's still fairly inefficient
    -   it start's by checking the distance from the "origin" city to all the other cities. The Algorithm takes the city that is the closest and repeats the algorithm excluding all the cities that have already been checked. This recurses until all the cities have been checked."""
print(repr(content).replace('"', '\\"').replace("\\'", "'"))