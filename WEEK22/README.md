## WEEK22

### Live Classes
22.1 -> Vertical Scaling, Cluster module


### Recorded Classes


### Notion Notes
22.1 -> https://projects.100xdevs.com/tracks/hor-ver-scaling/Horizontal-and-vertical-scaling--Indexes-in-DBs-1
22.2 -> 


### Extras
22.1 -> 
- Single Nodejs process being single threaded uses single cpu core
- Using cluster module to create child processes with a parent process
- Benefit: Utilizing multiple cores by creating multiple child processes but on single port
- No, you cannot directly share variables across forks when using the cluster
- Cluster module load balances the requests in a round-robin fashion