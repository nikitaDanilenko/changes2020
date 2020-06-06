object ToJSON {

  case class Data(date: String,
                  dataSet: String,
                  value: Double)

  def dataToJSON(data: Data): String =
    s"{ x: '${data.date}', y: '${data.value}' }"

  val colors = List(
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 150)",
    "rgb(54, 162, 235)",
    "rgb(73, 91, 191)",
    "rgb(153, 102, 255)"
  )

  def toJSON(dataItems: List[Data]): String = {

    def mkDataSet(dataSet: String, subItems: List[Data], position: Int): String = {
      val color = colors.apply(position % colors.length)
      val dataList = subItems.map(dataToJSON)
      val result = List(
        s"{\nlabel : '$dataSet'",
        s"borderColor: '$color'",
        s"backgroundColor: '$color'",
        s"fill: false",
        s"lineTension: 0",
        s"data: [ ${dataList.mkString(", ")}]\n}"
      ).mkString(",\n")
      result
    }

    val labels = dataItems.map(_.date).distinct.map(d => s"'$d'").mkString(", ")

    val grouped = dataItems.groupBy(_.dataSet)

    val dataSets = grouped.toList.sortBy(_._1).zipWithIndex.map { case ((dataSet, subItems), position) =>
      mkDataSet(dataSet, subItems, position)
    }.mkString(",\n")

    val result = List(
      s"labels: [ $labels ],",
      "datasets: [",
      dataSets,
      "]"
    ).mkString("\n")
    result
  }

  def fromCSVLineWith(line: String,
                      datePosition: Int,
                      dataSetPosition: Int,
                      valuePosition: Int): Option[Data] = {
    val parts = line.split(",")
    if (parts.isDefinedAt(datePosition) && parts.isDefinedAt(dataSetPosition) && parts.isDefinedAt(valuePosition)) {
      Some(Data(parts(datePosition), parts(dataSetPosition), parts(valuePosition).toDouble))
    }
    else None
  }

  def fromCSVLinesWith(text: String,
                       datePosition: Int,
                       dataSetPosition: Int,
                       valuePosition: Int): List[Data] = {
    text.split("\n").flatMap(fromCSVLineWith(_, datePosition, dataSetPosition, valuePosition)).toList
  }

  def fullPipeline(text: String,
                   datePosition: Int,
                   dataSetPosition: Int,
                   valuePosition: Int): String = {
    toJSON(fromCSVLinesWith(text, datePosition, dataSetPosition, valuePosition))
  }
  
}