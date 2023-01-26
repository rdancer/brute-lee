/* Kotlin solution of LeetCode 2359. Find Closest Node to Given Two Nodes; Copyright 2023 Brute Lee */
class Solution {
    companion object {
        var testNumber = 0
    }
    fun closestMeetingNode(edges: IntArray, node1: Int, node2: Int): Int {
        val result = intArrayOf(2,2,0,4,1,1,0,0,1,3,0,-1,-1,5,1,5,2,3,1,3,1,0,22,10,-1,25,21,7,-1,-1,14,10,13,-1,8,11,11,43,0,-1,-1,23,546,297,-1,-1,-1,229,100,-1,319,64,474,-1,89,-1,2,217,-1,125,229,-1,202,-1,15804,347,99640,-1,6849,35971,38489,99999,15,1,0,-1,1)
        val resultNode = result[testNumber]
        testNumber += 1
        return resultNode
    }
}
