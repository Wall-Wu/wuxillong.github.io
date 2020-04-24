<?php
/**
 * xigua_feiji模块微站定义
 *
 * @author lyg1000
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class Xigua_feijiModuleSite extends WeModuleSite {


	public function doMobileIndex1()
	{
		global $_W,$_GPC;


		
		 include $this->template('index');
	}

}