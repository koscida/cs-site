<?php
class ShapeClass
{
	protected $shapeType;
	protected $height;
	protected $width;
	
	
	public function getShapeType()
	{
		return $this->shapeType;
	}
	
	public function setShapeType($t)
	{
		$this->shapeType = $t;
	}
	
	public function setShapeHeight($h)
	{
		$this->height = $h;
	}
	
	public function setShapeWidth($w)
	{
		$this->width = $w;
	}
	
	public function drawShape()
	{
		echo '<div class="ele"><div class="'.$this->shapeType.'" style="height:'.$this->height.'px; width:'.$this->width.'px;">&nbsp;</div><h4>'.$this->shapeType.'</h4></div>';
	}
}

class Circle extends ShapeClass
{
	function __construct()
	{
		$this->setShapeType('Circle');
		$this->setShapeHeight(100);
		$this->setShapeWidth(100);
	}
}

class Square extends ShapeClass
{
	function __construct()
	{
		$this->setShapeType('Square');
		$this->setShapeHeight(100);
		$this->setShapeWidth(100);
	}

}

?>