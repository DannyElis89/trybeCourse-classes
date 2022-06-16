SELECT 
	MIN(planos.valor_plano) AS "faturamento_minimo",
    MAX(planos.valor_plano) AS "faturamento_maximo", 
    ROUND(AVG(planos.valor_plano), 2) AS "faturamento_medio",
    ROUND(SUM(planos.valor_plano), 2) AS "faturamento_total"
FROM SpotifyClone.planos
    JOIN SpotifyClone.usuario 
    ON usuario.plano_id = planos.plano_id;