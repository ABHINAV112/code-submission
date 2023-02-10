
select * from
    (select distinct `address` as `address` from trades where block_height > 730000) trades 
        inner join (select `address` from balances group by `address` having
            amount * (case when denom='usdc' then 0.000001 when denom='usdc' then 0.00000005 when denom='usdc' then 0.003 end)>=500) wallet
                on trades.address=wallet.address;