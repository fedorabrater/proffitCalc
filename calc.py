
valorBitcoin = float(input("Entre o valor de  compra de 1 BTC => "))
taxaBtc = valorBitcoin * 0.0005

valorCompraReal = float(input("Entre o valor de compra => "))

valorVendaLiquida = float(input("Entre o valor da venda => "))

lucro = (valorVendaLiquida) - (valorCompraReal - taxaBtc)

taxaRetirada = 2.90 + (lucro * 2/100)

print(f"lucro = R$ {valorVendaLiquida} -  (R$ {valorCompraReal} - R${taxaBtc}) ")

print(f"Lucro dentro da plataforma = R$ {lucro :.2f}")

print(f"Lucro dentro da conta Corrente = R$ {lucro - taxaRetirada :.2f}")







